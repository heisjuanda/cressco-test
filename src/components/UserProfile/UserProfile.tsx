import './UerProfile.css';

type Props = {
    img: string ,
    fullName: string ,
    country: string ,
};

//Imagen, Nombre completo, país
export const UserProfile = ({
    img , fullName, country
}:Props) => {
    return (
        <section className='user-section'>
            <header>
                {fullName}
            </header>
            <article>
                <div>
                    <img src={img} alt="random img of a random person as well" />
                </div>
                <div>
                    <p>{country}</p>
                </div>
            </article>
        </section>
    );
};
