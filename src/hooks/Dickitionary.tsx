'use client'

import React, { createContext, useContext } from 'react'
import { Dictionary } from '@/lib/dictionary'

const DictionaryContext = createContext<{ dictionary: Dictionary; language: string } | null>(null)

export function DictionaryProvider({
    dictionary,
    language,
    children,
}: {
    dictionary: Dictionary
    language: string
    children: React.ReactNode
}) {
    return (
        <DictionaryContext.Provider value={{ dictionary, language }}>
            {children}
        </DictionaryContext.Provider>
    )
}

export function useDictionary() {
    const context = useContext(DictionaryContext)
    if (!context) {
        throw new Error('useDictionary must be used within a DictionaryProvider')
    }
    return context
}