import React from "react";

const AuthLayout = ({children}: {
    children: React.ReactNode
})  => {
    return (
        <section
            className={"mx-auto flex min-h-dvh w-full min-w-[320px] flex-col"}
        >
            {children}
        </section>
    )
};

export default AuthLayout;