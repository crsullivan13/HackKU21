import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

type UrlParams = {
    slug: string,
}

type Hackit = {
    name: string,
    description: string,
}

const database: Hackit[] = [
    {
        name: "dogs",
        description: "all kinds of puppies",
    }
]

const HackitPage = () => {
    const { slug } = useParams<UrlParams>();

    const [hackit, setHackit] = useState<Hackit>();

    useEffect(() => {
        setHackit(database.find((hackit)=>{
            return hackit.name == slug;
        }))
    }, [slug])

    return (
        <div>
            <p>
                I'm a Hackit!
            </p>
            {hackit ? (
                <div>
                    <p>
                        {hackit.name}
                    </p>
                    <p>
                        {hackit.description}
                    </p>
                </div>
            ) : (
                <p>
                    Hackit not found
                </p>
            )}
        </div>
    )
}

export default HackitPage;