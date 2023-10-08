import {useRouter} from 'next/router'

const DetailPage = () => {
    const router = useRouter()

    const newId = router.query.newsId
    console.log(newId)

    return <h1>This is detail page!</h1>
}

export default DetailPage