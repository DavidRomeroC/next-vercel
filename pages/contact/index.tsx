import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {

    // const david = crypto.randomUUID();

    // console.log(david);

    return (
        <MainLayout title="contact">
            <div>
                <h1>Contact page</h1>

                <h1 className={"title"}>
                    Ir a <Link href="/">Home</Link>
                </h1>

                <p className={"description"}>
                    Get started by editing{' '}
                    <code className={"code"}>pages/contact.jsx</code>
                </p>
            </div>
        </MainLayout>
    )
}