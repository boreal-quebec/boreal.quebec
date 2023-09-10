import RechercheBottinForm from "@/components/forms/rechercheBottin";

export default function Botin() {
    return (
        <main className={"flex min-h-screen flex-col"}>
            <div className={"flex flex-col justify-center items-center bg-beige pt-20 pb-20"}>
                <div className={"mb-12"}>
                    <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
                </div>
                <h1 className={"text-white font-medium text-center text-2xl md:text-3xl px-8"}>le bottin</h1>
                <h1 className={"text-primary font-medium text-center text-2xl md:text-3xl px-8"}>Le répertoire des restaurateurs alternatifs québecois</h1>
            </div>
            <div className={"bg-beige pr-4"}>
                <RechercheBottinForm />
            </div>

        </main>
    )
}