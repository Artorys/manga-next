// app/providers.tsx
'use client'

import { AsideProvider } from '@/contexts/aside.context'
import { themeApp } from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeApp}>
        <AsideProvider>
          {children}
        </AsideProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}