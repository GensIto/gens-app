import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { supabase } from '../utils/supabase'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})
// // エラー時のフォールバック用のコンポーネント
// const ErrorFallback: React.FC<FallbackProps> = ({
//   error,
//   resetErrorBoundary,
// }) => {
//   return (
//     <div role="alert">
//       <p>Error Message</p>
//       <pre>{error!.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const client = createClient(supabaseUrl, supabaseAnonKey)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* //   <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
      {/* //     <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* //   </ErrorBoundary> */}
    </QueryClientProvider>
  )
}

export default MyApp
