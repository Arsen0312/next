import type {Metadata} from "next";
import "./globals.css";
import Header from "@/widgets/Header";

export const metadata: Metadata = {
    title: "Авторские туры Кыргзстан TravelTok",
    description: "Туры бишкек Туры ош Туры нарын Туры жалал абад Туры ысык кол Туры баткен TravelTok туры",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
            <Header/>
                {children}
            </body>
        </html>
    );
}
