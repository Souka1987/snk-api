import { RaRecord, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface Category extends RaRecord {
    name: string;
}

export interface Planet extends RaRecord {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}

export interface Tag extends RaRecord {
    name: string;
    color: string;
}

export interface Country extends RaRecord {
    country_name: string;
    also_known_as: string;
    capital: string;
    head_of_state: string;
    head_of_government: string;
    people: string;
    official_language: string;
    form_of_government: string;
    first_seen: string;
    last_seen: string;
    // has_ordered: boolean;
    // latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    // nb_commands: number;
    // total_spent: number;
}

export type OrderStatus = 'ordered' | 'delivered' | 'cancelled';

export interface Order extends RaRecord {
    status: OrderStatus;
    basket: BasketItem[];
    date: Date;
    total: number;
}

export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}

export interface Invoice extends RaRecord {}

export type ReviewStatus = 'accepted' | 'pending' | 'rejected';

export interface Review extends RaRecord {
    date: Date;
    status: ReviewStatus;
    country_id: Identifier;
    planet_id: Identifier;
}

declare global {
    interface Window {
        restServer: any;
    }
}
