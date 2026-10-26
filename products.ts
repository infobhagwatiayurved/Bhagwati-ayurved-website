import { supabase } from './supabase';

export type Product = { id: string; name: string; name_hi?: string | null; category: string; description: string; description_hi?: string | null; image_url?: string | null; pack_size?: string | null; mrp?: number | null; featured?: boolean; published?: boolean; };

// Demo content is shown until Supabase is configured. Replace these examples with verified products.
export const demoProducts: Product[] = [
 {id:'demo-1',name:'Herbal Wellness Blend',name_hi:'हर्बल वेलनेस ब्लेंड',category:'Herbal Formulations',description:'A sample catalogue entry. Replace this text with the approved product description.',description_hi:'यह एक नमूना उत्पाद विवरण है। इसे स्वीकृत जानकारी से बदलें।',image_url:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',pack_size:'As per pack label',mrp:null,featured:true,published:true},
 {id:'demo-2',name:'Traditional Herbal Care',name_hi:'पारंपरिक हर्बल केयर',category:'Daily Care',description:'A sample catalogue entry. Add label-verified ingredients and product details before publishing.',description_hi:'नमूना कैटलॉग विवरण। प्रकाशित करने से पहले लेबल के अनुसार जानकारी जोड़ें।',image_url:'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=900&q=80',pack_size:'As per pack label',mrp:null,featured:true,published:true},
 {id:'demo-3',name:'Botanical Care Essentials',name_hi:'बॉटैनिकल केयर एसेंशियल्स',category:'Herbal Formulations',description:'A sample catalogue entry for layout preview only. Not a real product claim.',description_hi:'डिज़ाइन देखने के लिए नमूना प्रविष्टि। यह वास्तविक उत्पाद दावा नहीं है।',image_url:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80',pack_size:'As per pack label',mrp:null,featured:true,published:true},
 {id:'demo-4',name:'Natural Living Collection',name_hi:'नेचुरल लिविंग कलेक्शन',category:'Wellness',description:'Use this space for factual, approved information about the product.',description_hi:'यहाँ उत्पाद के बारे में तथ्यात्मक और स्वीकृत जानकारी लिखें।',image_url:'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=80',pack_size:'As per pack label',mrp:null,featured:true,published:true}
];

export async function getProducts(): Promise<Product[]> {
 if (!supabase) return demoProducts;
 const { data, error } = await supabase.from('products').select('*').eq('published', true).order('created_at', {ascending:false});
 if (error || !data?.length) return demoProducts;
 return data as Product[];
}
