import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyles } from "shared/ui/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { Layout } from "shared/ui/Layout";
import { theme } from "shared/ui/theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalStyles />
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
