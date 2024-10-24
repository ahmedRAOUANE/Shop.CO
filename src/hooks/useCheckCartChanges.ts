import { db } from '@/utils/firebase';
import { CartItem } from '@/utils/types';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

/**
 *  listen to changes in the items array inside the userCart 
 *    collection and update the products array in real-time
 * 
 * @param userId - the id of the current user
 * @param initialItems - the initial items (products array) in the cart
 * @returns {items: CartItem[]} - the items in the cart
 */

const useCheckCartChanges = (userId: string, initialItems: CartItem[]) => {
    const [items, setProducts] = useState<CartItem[]>(initialItems);

    useEffect(() => {
        const unseb = onSnapshot(doc(db, "userCart", userId), (doc) => {
            if (doc.exists()) {
                setProducts(doc.data().items)
            }
        })

        return () => unseb();
    }, [items, userId]);

    return { items }
}

export default useCheckCartChanges