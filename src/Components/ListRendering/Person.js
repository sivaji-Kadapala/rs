import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h2>
                Iam {person.name}.iam {person.age} years old.i know {person.skill}
            </h2>
        </div>
    )
}
