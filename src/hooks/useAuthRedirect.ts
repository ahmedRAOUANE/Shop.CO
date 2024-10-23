import { UserAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

/**
 * handling the redirect based on the user authentication state
 * 
 * @param {string} redirectTo - the target route to redirect the user to
 * @param {boolean} inverse - for redirect the authenticated users to another page
 */

const useAuthRedirect = (redirectTo: string, inverse: boolean = false) => {
    const { user } = UserAuth();
    const router = useRouter();

    useEffect(() => {
        if ((!user && inverse) || (user && !inverse)) {
            router.push(redirectTo);
        }
    }, [user, inverse, router, redirectTo]);
}

export default useAuthRedirect