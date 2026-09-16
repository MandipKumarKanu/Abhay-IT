/**
 * IndexNow submission helper (Bing / Yandex / Naver / Seznam / Yep).
 * Docs: https://www.bing.com/indexnow
 *
 * Key file: public/3c5d5f5059bfb0d451d443761962d814.txt
 * Key location: https://www.abhaydigital.com.np/3c5d5f5059bfb0d451d443761962d814.txt
 *
 * Submit manually after each deploy:
 *   curl "https://api.indexnow.org/indexnow?url=https://www.abhaydigital.com.np/&key=3c5d5f5059bfb0d451d443761962d814"
 */

export const INDEXNOW_KEY = "3c5d5f5059bfb0d451d443761962d814";
export const INDEXNOW_KEY_LOCATION = `https://www.abhaydigital.com.np/${INDEXNOW_KEY}.txt`;

export const INDEXNOW_URLS = [
  "https://www.abhaydigital.com.np/",
  "https://www.abhaydigital.com.np/services",
];

export async function submitToIndexNow(urls: string[] = INDEXNOW_URLS) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: "www.abhaydigital.com.np",
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls,
    }),
  });
  return res.status;
}
