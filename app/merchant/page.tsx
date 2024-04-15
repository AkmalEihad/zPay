'use client'
import {useRouter} from "next/navigation";

const MerchantPage = () => {
    const router = useRouter();
    return (
        router.push("/merchant/auth")
    );
};

export default MerchantPage;