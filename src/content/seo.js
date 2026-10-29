// Titres, descriptions et images d'aperçu de chaque page.
// Utilisé par le site (onglet du navigateur) et au build (pages HTML lues par WhatsApp, Google, réseaux sociaux).
import { PROJECTS } from '../data/site.js'

const SITE = 'Christ Axel Teky'
export const DEFAULT_META = {
  title: 'Christ Axel Teky — Développeur fullstack à Abidjan',
  description: 'Christ Axel Teky, développeur fullstack, conçoit, livre et fait vivre des sites et applications pour les entreprises d’Abidjan et d’ailleurs.',
  image: '/og/default.png',
}

export const PAGE_META = {
  '/projets': { title: 'Projets', description: 'Les sites et applications de Christ Axel Teky, pensés pour la Côte d’Ivoire, avec leurs études de cas.' },
  '/diagnostic': { title: 'Diagnostic', description: 'Trois questions, une recommandation : découvrez en 30 secondes ce dont votre projet a besoin.' },
  '/contact': { title: 'Contact', description: 'Écrivez à Christ Axel Teky sur WhatsApp ou par e-mail. Réponse sous 24 h, en français, sans jargon.' },
}

export const projectMeta = (p) => ({
  title: p.name,
  description: [p.tagline, p.summary].filter(Boolean).join(' '),
  image: `/og/${p.id.toLowerCase()}.png`,
})

// Toutes les adresses à générer au build
export function allRoutes() {
  const routes = { '/': DEFAULT_META }
  for (const [path, m] of Object.entries(PAGE_META)) routes[path] = { ...DEFAULT_META, ...m, title: `${m.title} · ${SITE}` }
  for (const p of PROJECTS.filter((x) => !x.href)) {
    const m = projectMeta(p)
    routes[`/projets/${p.id.toLowerCase()}`] = { ...m, title: `${m.title} · ${SITE}` }
  }
  return routes
}
