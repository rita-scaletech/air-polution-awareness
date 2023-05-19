import React from 'react'
import { useTranslation } from 'react-i18next';


interface IProps {
    name: string;
    value: string | number;
}
const Option: React.FC<IProps> = (props) => {
    const { t } = useTranslation();
    return <option value={props.value}>{t(props.name)}</option>;
};

export default Option