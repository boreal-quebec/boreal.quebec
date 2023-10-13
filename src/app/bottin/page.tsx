import RechercheBottinForm from "@/components/forms/rechercheBottin";
import Header from "@/components/header";

export default function Botin() {
    return (
        <main className={"flex min-h-screen flex-col"}>
            <Header title={"le bottin"} phrase={"Le répertoire des restaurateurs alternatifs québecois"} />
            <div className={"bg-white pr-4"}>
                <RechercheBottinForm />
            </div>

        </main>
    )
}