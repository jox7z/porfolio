import type { Lang } from "@/i18n/content"

// Coloca los PDF en src/assets/cv/ con estos nombres; el botón se activa solo en el siguiente build.
//   src/assets/cv/Jose-Hernandez-CV-ES.pdf
//   src/assets/cv/Jose-Hernandez-CV-EN.pdf
const files = import.meta.glob<string>("/src/assets/cv/*.pdf", { eager: true, query: "?url", import: "default" })

const CV_FILES: Record<Lang, string> = {
  es: "/src/assets/cv/Jose-Hernandez-CV-ES.pdf",
  en: "/src/assets/cv/Jose-Hernandez-CV-EN.pdf",
}

export const CV_DOWNLOAD_NAME: Record<Lang, string> = {
  es: "Jose-Hernandez-CV-ES.pdf",
  en: "Jose-Hernandez-CV-EN.pdf",
}

/** URL del CV para el idioma (o la del otro idioma como respaldo), o null si aún no existe. */
export function getCv(lang: Lang): { url: string; filename: string } | null {
  const other: Lang = lang === "es" ? "en" : "es"
  for (const l of [lang, other]) {
    const url = files[CV_FILES[l]]
    if (url) return { url, filename: CV_DOWNLOAD_NAME[l] }
  }
  return null
}
