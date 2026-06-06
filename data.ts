/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, TimelineItem } from './types';

export const personalInfo = {
  name: "FEUGANG FEUSSI YOAN ALANE",
  title: "Développeur & UI/UX Designer",
  bio: "Jeune étudiant passionné par les animes, les jeux vidéo, le DevOps, la cybersécurité et le développement Cloud. Je combine créativité visuelle et rigueur technique pour concevoir des applications sécurisées, élégantes et hautement performantes.",
  email: "feugangyoan@gmail.com",
  github: "https://github.com/feugangyoan-sketch",
  linkedin: "https://linkedin.com/in/feugangyoan",
  location: "Douala, Cameroun",
  interests: ["Animes (Shonen, Seinen)", "Jeux Vidéo (Action, Stratégie)", "DevOps Culture", "Cyber Sécurité", "Cloud Computing"],
  favoriteGames: ["Elden Ring", "Cyberpunk 2077", "Valorant", "Minecraft"],
  favoriteAnimes: ["Demon Slayer", "Solo Leveling", "Jujutsu Kaisen", "Attack on Titan"]
};

export const projects: Project[] = [
  {
    id: "calc",
    title: "CALCULATRICE",
    description: "Une calculatrice interactive permettant d'effectuer des calculs mathématiques avancés. Conçue initialement en Python avec une interface utilisateur dynamique, recréée ici en simulateur interactif pour tester en temps réel.",
    techs: ["Python", "Tkinter", "Math Modules"],
    type: "Application Desktop",
    color: "from-blue-600 to-cyan-400",
    previewType: "calculator"
  },
  {
    id: "ecom",
    title: "SITE E-COMMERCE",
    description: "Une plateforme en ligne de vente de vêtements modernes inspirés de la pop-culture (Gaming & Animes). Elle comprend un catalogue réactif, une sélection de tailles et un panier d'achat persistant entièrement simulé.",
    techs: ["HTML5", "CSS3", "JavaScript (ES6)", "TailwindCSS"],
    type: "Application Web",
    color: "from-orange-500 to-yellow-400",
    previewType: "ecommerce"
  },
  {
    id: "music",
    title: "MUSIC PLAYER",
    description: "Un lecteur audio moderne et stylisé permettant de charger et d'écouter ses musiques favorites. Construit en Python avec un égaliseur graphique et des effets de transition audio immersifs.",
    techs: ["Python", "Pygame Audio", "CustomTkinter"],
    type: "Application Desktop",
    color: "from-purple-600 to-pink-500",
    previewType: "musicplayer"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "CYBER SÉCURITÉ",
    icon: "ShieldAlert",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-teal-500/5 hover:border-cyan-400/50",
    description: "Sécurisation des systèmes, détection d'intrusions, et bonnes pratiques de codage sécurisé.",
    skills: ["Analyse de vulnérabilités", "Pentesting & Audit", "Cryptographie", "Sécurisation réseau (Firewalls)", "OWASP Top 10"]
  },
  {
    title: "DEVOPS & CLOUD",
    icon: "CloudLightning",
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-yellow-500/5 hover:border-orange-400/50",
    description: "Conteneurisation, intégration et déploiement continus dans le cloud.",
    skills: ["Docker & Kubernetes", "CI/CD (GitHub Actions)", "Cloud Computing", "Infrastructure as Code", "Monitoring logs"]
  },
  {
    title: "RÉSEAUX & SYSTÈMES",
    icon: "Network",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-indigo-500/5 hover:border-blue-400/50",
    description: "Configuration réseau et administration système avancée sous Linux et Windows.",
    skills: ["Administration Linux (Debian, Ubuntu)", "Protocoles TCP/IP & Routage", "Virtualisation", "Sécurité des protocoles", "Cisco Packet Tracer"]
  },
  {
    title: "BASES DE DONNÉES",
    icon: "Database",
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-amber-500/5 hover:border-yellow-400/50",
    description: "Modélisation, requêtage et optimisation de structures de données massives.",
    skills: ["SQL & NoSQL", "PostgreSQL / MySQL", "Modélisation Merise / UML", "Optimisation de requêtes", "MongoDB"]
  }
];

export const educationHistory: TimelineItem[] = [
  {
    id: "univ-3",
    year: "2025 - 2026",
    title: "Licence de Technologie en Informatique (Option Génie Logiciel / DevOps)",
    institution: "IUT de Douala - Université de Douala",
    description: "Spécialisation dans les architectures distribuées, l'automatisation des pipelines de déploiement et la cybersécurité des systèmes applicatifs.",
    tag: "En cours"
  },
  {
    id: "univ-2",
    year: "2023 - 2025",
    title: "Diplôme Universitaire de Technologie (DUT) en Génie Informatique",
    institution: "IUT de Douala, Cameroun",
    description: "Formation intensive en programmation structurée (Python, Java, C++), fondamentaux des réseaux, modélisation de bases de données et conception UI/UX.",
    tag: "Diplômé"
  },
  {
    id: "certifs",
    year: "2024",
    title: "Certifications Professionnelles (Autodidacte & Plateformes)",
    institution: "Cisco Networking Academy & CyberOps / Coursera",
    description: "Obtention de certifications en Introduction à la Cybersécurité, Routage Réseau, et fondamentaux du Cloud public.",
    tag: "Certifié"
  },
  {
    id: "bac",
    year: "2023",
    title: "Baccalauréat Scientifique (Série TI - Technologies de l'Information)",
    institution: "Lycée de Douala, Cameroun",
    description: "Introduction à l'algorithmique de base, à la physique appliquée et au développement web initial.",
    tag: "Mention Bien"
  }
];
