import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem:React.FC<TeacherItemProps> = ({ teacher }) => {
    function createConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }
    return(
        <article className="teacher-item">
            <header>
                <img src={ teacher.avatar } alt="profile pic"/>
                <div>
                    <strong>{ teacher.name }</strong>
                    <span>{ teacher.subject }</span>
                </div>
            </header>
            <p>{ teacher.bio }</p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>$ { teacher.cost }</strong>
                </p>
                <a
                    href={`https://w.me/${teacher.whatsapp}`}
                    target="_blanck"
                    onClick={ createConnection }
                >
                    <img src={ whatsappIcon } alt="whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
            
    );
}

export default TeacherItem;