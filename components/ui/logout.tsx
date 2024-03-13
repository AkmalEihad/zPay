import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import * as React from "react";
import {useEffect, useState} from "react";
import {toast} from "sonner";

export function LogoutPc() {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
        }

        getUser();
    }, [supabase])

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
        router.refresh();
        setUser(null)
    }

    const handleBoth = () => {
        handleLogout();
        toast.success('Successfully Logged Out');
    }

    if (user) {
        return (
            <button
                onClick={handleBoth}
                className={`group flex items-center space-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium ${pathname === "/merchant/signup" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white dark:active:border-gray-600`}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24" fill="currentColor"
                     className={`hi-mini hi-bold inline-block size-5 ${pathname === "/merchant/signup" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                >
                    <path fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"/>
                </svg>
                <span>Logout</span>
            </button>
        )
    }

    return (
        <Link
            href={'/merchant/signup'}
            className={`group flex items-center space-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium ${pathname === "/merchant/signup" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white dark:active:border-gray-600`}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24" fill="currentColor"
                 className={`hi-mini hi-bold inline-block size-5 ${pathname === "/merchant/signup" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
            >
                <path
                    d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"/>
            </svg>
            <span>Daftar</span>
        </Link>
    )
}

export function LogoutMobile() {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
        }

        getUser();
    }, [supabase])

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
        router.refresh();
        setUser(null)
    }

    const handleBoth = () => {
        handleLogout();
        toast.success('Successfully Logged Out');
    }
    if (user) {
        return (
            <button
                onClick={handleBoth}
                className={`group flex items-center space-x-2 rounded-xl border border-blue-50 px-3 py-2 text-sm font-medium ${pathname === "/merchant/signup" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:border-transparent dark:hover:text-white dark:active:border-gray-600`}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24" fill="currentColor"
                     className={`hi-mini hi-bold inline-block size-5 ${pathname === "/merchant/signup" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                >
                    <path fillRule="evenodd"
                          d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"/>
                </svg>
                <span>Logout</span>
            </button>
        )
    }

    return (
        <Link
            href={"/merchant/signup"}
            className={`group flex items-center space-x-2 rounded-xl border border-blue-50 px-3 py-2 text-sm font-medium ${pathname === "/merchant/signup" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:border-transparent dark:hover:text-white dark:active:border-gray-600`}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24" fill="currentColor"
                 className={`hi-mini hi-bold inline-block size-5 ${pathname === "/merchant/signup" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
            >
                <path
                    d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"/>
            </svg>
            <span>Daftar</span>
        </Link>
    )
}
