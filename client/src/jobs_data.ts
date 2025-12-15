import type {Job} from "@/types.ts";

export const jobsData: Job[] = [
    {
        id: 1,
        companyName: "Acme Inc",
        jobAdUrl: "https://www.acmeinc.com?ad=1",
        jobTitle: "Software Developer",
        companyUrl: "https://www.acmeinc.com",
        notes: "this is a great opportunity",
        createdAt: "2025-12-13",
    },
    {
        id: 2,
        companyName: "Amazone",
        jobAdUrl: "https://www.amazon.com",
        jobTitle: "Software Engineer",
        companyUrl: "https://www.amazon.com",
        notes: "Hope this one works out...",
        createdAt: "2025-12-14",
    },
    {
        id: 3,
        companyName: "Groogggle",
        jobAdUrl: "https://www.groogle.com/jobs/ad/1",
        jobTitle: "Software Engineer",
        companyUrl: "https://www.groogle.com",
        notes: "Yet another job applied for",
        createdAt: "2025-12-14",
    },
]