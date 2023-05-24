// app/providers.tsx
'use client'

import { themeApp } from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeApp}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}