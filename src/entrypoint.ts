import type { Alpine } from 'alpinejs'
import ajax from '@imacrayon/alpine-ajax'


export default (Alpine: Alpine) => {
    Alpine.plugin(ajax)
}