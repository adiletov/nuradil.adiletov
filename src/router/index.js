import {createRouter, createWebHistory} from "vue-router";
import {MainPage, Experience, Work, Contact} from "../pages/pages";


const routes = [
    {path: '/', component: MainPage, name: 'About Me', meta: {number: 1}},
    {path: '/experience', component: Experience, name: 'Experience', meta: {number: 2}},
    {path: '/work', component: Work, name: 'Work', meta: {number: 3}},
    {path: '/contact', component: Contact, name: 'Contact', meta: {number: 4}},
]


export const router =  createRouter({
    history: createWebHistory(),
    routes
})
