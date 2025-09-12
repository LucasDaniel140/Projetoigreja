
"use server";

import { revalidatePath } from "next/cache";
import { siteDataStore } from "@/lib/site-data";

// Helper to convert file to data URI
async function fileToDataURI(file: File) {
    const buffer = Buffer.from(await file.arrayBuffer());
    return `data:${file.type};base64,${buffer.toString("base64")}`;
}

export async function updateSiteData(formData: FormData) {
    const newValues: { logo?: string; favicon?: string } = {};

    const logoFile = formData.get("logo") as File | null;
    const faviconFile = formData.get("favicon") as File | null;

    if (logoFile && logoFile.size > 0) {
        newValues.logo = await fileToDataURI(logoFile);
    }

    if (faviconFile && faviconFile.size > 0) {
        newValues.favicon = await fileToDataURI(faviconFile);
    }
    
    if (Object.keys(newValues).length > 0) {
        siteDataStore.set(newValues);
    }

    revalidatePath("/", "layout");

    return { success: true, message: "Configurações salvas com sucesso!" };
}
