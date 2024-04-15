import {Separator} from "@/components/ui/separator";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {
    IconCoinOff,
    IconDevices,
    IconSettingsBolt,
    IconShieldCheck,
    IconUsers,
    IconZoomMoney
} from '@tabler/icons-react';

const BenefitCard = () => {

    const benefits = [
        {
            id: 1,
            icon: <IconZoomMoney size={40} stroke={1.4}/>,
            title: "Tiada Caj Tersembunyi",
            desc: "Kami mengutamakan perniagaan anda dan tiada sebarang caj tambahan dikenakan."
        },
        {
            id: 2,
            icon: <IconSettingsBolt size={40} stroke={1.4}/>,
            title: "Mudah dan Pantas",
            desc: "Konfigurasi yang mudah dan pantas, langgan dan terus guna."
        },
        {
            id: 3,
            icon: <IconCoinOff size={40} stroke={1.4}/>,
            title: "Pendaftaran Percuma",
            desc: "Tiada caj pendaftaran dan penetapan akaun. Anda akan menerima semua kelebihan zPay dengan pendaftaran percuma."
        },
        {
            id: 4,
            icon: <IconUsers size={40} stroke={1.4}/>,
            title: "Pelbagai Penggunaan",
            desc: "Sesuai untuk pengeluaran bil secara dalam talian, derma, bayaran invois, bil, e-dagang, tiket dan lain-lain."
        },
        {
            id: 5,
            icon: <IconShieldCheck size={40} stroke={1.4}/>,
            title: "Perlindungan data",
            desc: "Perindungan data akibat daripada pencerobohan. Perniagaan yang lebih terjamin dan terpelihara."
        },
        {
            id: 6,
            icon: <IconDevices size={40} stroke={1.4}/>,
            title: "Sokongan Pelbagai Platform",
            desc: "Perkhidmatan sokongan yang efisyen. Kami akan sentiasa ada untuk membantu melengkapkan invois pertama anda seterusnya mula menerima pembayaran."
        },
    ]

    return (
        <main
            className="container min-h-[calc(100vh-60px)] relative mx-auto flex flex-col px-4 pb-9 text-center lg:flex-col lg:px-8 lg:py-10 lg:text-left xl:max-w-7xl">


            <div className={"flex flex-col items-center justify-center"}>
                <h1 className={"text-[46px] font-black"}>Kelebihan zPay</h1>
            </div>
            <div>
                <Separator/>
            </div>
            <div className="my-auto max-w-7xl w-full">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full">
                    {benefits.map(benefits => {
                        return (
                            <Card key={benefits.id} className="max-w-full p-[20px] lg:p-[30px]">
                                <CardHeader className={"p-0"}>
                                    <div className="flex flex-col">
                                        {benefits.icon}
                                    </div>
                                </CardHeader>
                                <CardBody className={"p-0"}>
                                    <h1 className="text-md font-semibold text-[#506ee4]">{benefits.title}</h1>
                                    <p className="h-full flex items-end text-sm text-[#506ee4]/85">{benefits.desc}</p>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </main>
    )
};

export default BenefitCard;