import { useSelector } from 'react-redux'
import cls from '../../scss/components/_sidebarcategory.module.scss'

const SidebarCategory = ({ index }) => {
    const { sidebarCategory } = useSelector(state => state.app)

    return (
        <div className={ sidebarCategory === index ? `${cls.category} ${cls.category_active}`: cls.category }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni quasi id corporis ratione minima nostrum quaerat nam molestiae tempore omnis, earum officiis possimus laborum nulla, quia reprehenderit sequi totam.
            Amet distinctio minima unde, exercitationem consequatur voluptas enim laudantium dolorem modi, delectus qui, dolore ullam illo at. Odit quod, vel accusamus earum sapiente magni blanditiis dignissimos delectus in consequatur suscipit?
            Quas, debitis quae repellendus iste dolorem dolorum molestiae nulla fugit, possimus eaque dignissimos, mollitia a laborum omnis quos alias nemo recusandae aliquam distinctio numquam! Est ea repellat quis iste ex.
            At nihil labore cumque rem ut? Porro similique corrupti consectetur at nulla reprehenderit iure repellat ullam dolorem veniam, pariatur nemo illo non officiis. Animi dolorum illum, culpa nemo repellendus quasi?
            Autem a rem quae earum similique deleniti! Reiciendis quisquam sapiente, hic cupiditate sed illo. Mollitia similique recusandae illo, harum deleniti natus dolore incidunt amet error, facere dicta, tempora sunt cupiditate!
            Tempora quaerat molestiae, tenetur reiciendis obcaecati recusandae eius ducimus aliquam, sequi in amet officia repellat voluptate, impedit reprehenderit. Sunt quae odit tenetur harum voluptas impedit cupiditate hic sed quaerat excepturi.
        </div>
    )
}

export { SidebarCategory }