'use client'

import useJobDescription from "@/app/hooks/useJobDescription";
import { useState } from "react";
interface JobInputProps {
    onSubmit:(jobDescription: string)=>void,
    isLoading: boolean
}

const JobDescriptionInput = ({onSubmit,isLoading}:JobInputProps) => {
    const {jobDescription, setJobDescription} = useJobDescription();
    const exampleJob = `About the job
This role is remote, so it can be executed globally. If you prefer, you can work from our offices in New York, London and Warsaw.

About ElevenLabs

At ElevenLabs, we are pioneering voice technology with our cutting-edge research and products.

We launched in January 2023 and have since reached over 1 million users globally and have partnered with the world’s biggest names (see customer stories). We closed our Series-C funding at a 3.3B valuation at the beginning of this year and are backed by the leading names in tech and AI (a16z, ICONIQ, NEA, Sequoia, NFDG, Salesforce, and many others).

We are at an exciting phase of our growth and innovation and are looking for ambitious people to help us further push the boundaries of voice AI. This is a rare chance to be an early member of a company on the rise. If this excites you, we want to meet you!

Who We Are

A global team of passionate and innovative individuals united by curiosity and a shared goal: to be the first choice for AI audio solutions. Together, we are shaping a new technology and market from the ground up. We innovate quickly and take pride in getting things right, from the big picture initiatives to the details that keep us moving smoothly every day. We work with high autonomy and accountability where the best idea wins at any time and from anyone.

About The Role

We care about our website. It gets millions of views a month and is the most important showcase of our brand, our products, our research and our team. We want a website engineer to make it truly world-class. You’ll ideate and implement some of the most important pages including the homage page, demos pages and more. Additionally, you’ll take the lead on many microsites where we expect the page to be so strong that the site goes viral because of it — such as our recent hackathon website. You’ll need to have strong website and design opinions, but also be able to collaborate effectively with Growth to drive SEO and conversion. Ability to do design is a strong bonus.

You’ll work closely with Nev Flynn, Ammaar Reshi, Dul Zorigo and Luke Harries.

Ideate and implement beautiful, intuitive website pages that align with the ElevenLabs brand and tell the story of our product and company.
Ideate and implement interactive demos that enhance usability and engagement. They should be the level of quality that the demo itself goes viral.
Collaborate with Design, Engineering and Growth to ensure cohesive end-to-end web experiences.
Execute and iterate on designs based on user feedback, and best practices.
Stay up-to-date with the latest design trends, technologies, and tools to ensure that our website is best-in-class. 

Who You Are

We're looking for exceptional individuals who combine technical excellence with ethical awareness, who are excited by hard problems and motivated by human impact. You’ll strive with us if you:

Are passionate about audio AI driven by a desire to make content universally accessible and breaking the frontiers of new tech. 
Are a highly motivated and driven individual with a strong work ethic. Our team is aware of this critical moment of audio AI evolution and is committed to going the extra mile to lead. 
Are analytical, efficient, and strive on solving complex challenges with a first principles mindset. 
Consistently strive for excellence, delivering high-quality work quickly and exceeding expectations.
Take initiative and work autonomously from day one, prioritizing learning and contribution while leaving ego aside.

What You Bring

You’re a strong frontend engineer with an eye for design, and are proficient in Next.js, React, and likely design libraries like Framer Motion or D3.
You are either proficient in design or can work closely with designers.
You have a portfolio showcasing web projects and your ability to craft compelling web experiences for marketing websites. 
You can think creatively about ElevenLabs’ web and brand presence.
Bonus: strong copywriting skills and a working knowledge of SEO. 
`
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (jobDescription?.trim() === "") return;
        jobDescription && onSubmit(jobDescription)
    }
    const handleExampleJob = () => {
        setJobDescription(exampleJob)
    }

    return(
        <form onSubmit={handleSubmit}>
                <textarea name="description" id="job-desc" rows={4} placeholder="Enter job description here..." value={jobDescription} onChange={(e)=>setJobDescription(e.target.value)} className="border py-3 px-2 w-full rounded-[12px] bg-gray-800 border-gray-600 text-gray-50 mb-3"/>
                <button type="submit" className="block py-3 px-5 bg-blue-900 rounded-lg text-white font-semibold rounded-[12px]">{isLoading? "Getting questions" : "Generate Question"}</button>
                <button type="button" className="block py-3 mt-5 px-5 bg-blue-900 rounded-lg text-white font-semibold" onClick={handleExampleJob}>Example Job</button>
            </form>
    )
};

export default JobDescriptionInput;