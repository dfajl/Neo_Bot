/* 
    это файл, содержащий в себе ве компоненты. Данный подход позволяет регистрировать компоненты глобально
    и не писать везде import
*/
import MyNavbar from '@/components/Navbar';
import MyCheckBoxFilters from '@/components/CheckBoxFilters';
import MyMainButton from '@/components/MainButton';

export default [MyNavbar, MyCheckBoxFilters, MyMainButton];
