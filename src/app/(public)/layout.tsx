import { Footer } from "@/components/Footer";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}
