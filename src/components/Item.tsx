import { memo } from 'react';

type ItemProps = {
    title: string;
    onAddToWishlist: (item: string) => void;
    countItemWithOne: Number;
}

function ItemComponent(props: ItemProps) {
    return (
    <li>
        {props.title} / {props.countItemWithOne}
        <button type='button' onClick={() => props.onAddToWishlist(props.title)}>
        Add to wishlist
        </button>
    </li>
    )
}

export const Item = memo(ItemComponent);