import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Carrega as variáveis cadastradas no arquivo .env para a memória do Node
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Inicializa o cliente do Supabase pronto para uso
export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("🔌 Ponte de conexão com o Supabase estruturada.");