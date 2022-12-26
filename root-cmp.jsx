const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { HomePage } from './pages/home.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { BookEdit } from "./pages/book-edit.jsx"
import { BookDetails } from "./cmps/book-details.jsx"

export function App() {

    return <Router>
        <section className="main-layout app">
            <header className="app-header full main-layout">
                <AppHeader />
            </header>
            <main>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AboutUs />} path="/about" />
                    <Route element={<BookIndex />} path="/book" />
                    <Route element={<BookEdit />} path="/book/edit" />
                    <Route element={<BookDetails/>} path="/book/:bookId" />
                    <Route element={<BookEdit />} path="/book/edit/:bookId" />
                </Routes>
            </main>
        </section>
    </Router>
}