// ============================================
// ECOS - CONFIGURACIÓN GLOBAL
// ============================================

export const ECOS_CONFIG = {
    // API KEYS
    supabase: {
        auth: {
            url: 'https://ecos-auth.supabase.co',
            key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjb3MtYXV0aCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzE5MjM0NTY3LCJleHAiOjIwMzQ4MDU0Njd9.ejemploClaveAuth1234567890'
        },
        content: {
            url: 'https://ecos-content.supabase.co',
            key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjb3MtY29udGVudCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzE5MjM0NTY4LCJleHAiOjIwMzQ4MDU0Njh9.ejemploClaveContent1234567890'
        },
        social: {
            url: 'https://ecos-social.supabase.co',
            key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjb3Mtc29jaWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMzQ1NjksImV4cCI6MjAzNDgwNTQ2OX0.ejemploClaveSocial1234567890'
        }
    },
    
    // CONFIGURACIÓN DE ALGORITMO
    algorithm: {
        feedWeight: {
            engagement: 0.4,
            recency: 0.3,
            relevance: 0.2,
            relationship: 0.1
        },
        trendingWindow: 24, // horas
        maxPosts: 50
    },
    
    // LÍMITES
    limits: {
        maxVideoDuration: 60, // segundos
        maxImageSize: 10, // MB
        maxPostLength: 280,
        maxBioLength: 160
    }
};

export default ECOS_CONFIG;