import { component$ } from "@builder.io/qwik";
import logo from '../../media/MUN LOGO.png';



export default component$(() => {
    return (
        <>
            <div class="flex items-center justify-center">
                <img class=" w-80 md:w-6/12 h-auto md:h-200" src={logo} alt="" />
            </div>

        </>
    );
});

