import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get("contentId");
  const draftKey = searchParams.get("draftKey");
  const secret = searchParams.get("secret");

  // シークレットキーの検証
  if (secret !== process.env.MICROCMS_PREVIEW_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }

  if (!contentId || !draftKey) {
    return new Response("Missing contentId or draftKey", { status: 400 });
  }

  // Draft Modeを有効化
  const draft = await draftMode();
  draft.enable();

  // draftKeyをcookieに保存してリダイレクト
  redirect(`/posts/${contentId}?draftKey=${draftKey}`);
}