import { projectsData } from "@/lib/data"

export default function sitemap(){
    const baseURL = 'https://portfolio-eyuels-projects.vercel.app/'
    const detailRoutes = projectsData.map(p=>`${baseURL}/projects/${p.id}`);

    return [
        {
            url: baseURL,
            lastModified: new Date()
        },
        ...detailRoutes.map(r=>({url:r,lastModified: new Date()}))
    ]
}