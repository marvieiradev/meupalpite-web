import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'

const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required(),
})

export const Card = ({ disabled, gameId, homeTeam, awayTeam, homeTeamScore, awayTeamScore, gameTime }) => {
    const [auth] = useLocalStorage('auth')
    const formik = useFormik({
        onSubmit: (values) => {
            axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/hunches',
                headers: {
                    authorization: `Bearer ${auth.accessToken}`
                },
                data: {
                    ...values,
                    gameId
                }

            })
        },
        initialValues: {
            homeTeamScore,
            awayTeamScore,
        },
        validationSchema
    })
    return (
        <div className="rounded-xl border border-grey-300 border-2 p-4 text-center space-y-4 bg-red-300/[0.10]">
            <span className="text-sm md:text-base text-gray-700 font-bold">{gameTime}</span>

            <form className="flex space-x-4 justify-center items-center">

                <span className="uppercase font-bold text-red-700 md:text-lg">{homeTeam}</span>
                <img src={`/img/flags/${homeTeam}.png`} className="w-[40px] md:w-[56px]"/>

                <input type="number" min="0" max="20" className="bg-red-300/[0.2] w-[40px] h-[40px] text-lg md:w-[55px] md:h-[55px] md:text-xl text-red-700 text-center rounded-xl border border-red-500" 
                name="homeTeamScore" value={formik.values.homeTeamScore}
                onChange={formik.handleChange} onBlur={formik.handleSubmit}
                disabled={disabled}/>

                <span className="text-red-500 font-bold">X</span>

                <input type="number" min="0" max="20" className="bg-red-300/[0.2] w-[40px] h-[40px] text-lg md:w-[55px] md:h-[55px] md:text-xl text-red-700 text-center rounded-xl border border-red-500" 
                name="awayTeamScore" value={formik.values.awayTeamScore}
                onChange={formik.handleChange} onBlur={formik.handleSubmit}
                disabled={disabled}/>

                <img src={`/img/flags/${awayTeam}.png`} className="w-[40px] md:w-[56px]"/>
                <span className="uppercase font-bold text-red-700 md:text-lg">{awayTeam}</span>

            </form>

        </div>
    )
}