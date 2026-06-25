<template>
  <OortShEnLayout>
    <!-- Deploy Section -->
    <section id="deploy" class="deploy-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Deploy <span class="gradient-text">anything</span>
          </h2>
          <p class="section-subtitle">
            From AI agents to full-stack apps, your Vibe Coding results deploy globally through your own OORT.sh infrastructure.
          </p>
        </div>
        <div class="deploy-grid">
          <div class="deploy-card">
            <div class="deploy-icon">
              &#129302;
            </div>
            <h3>AI Agents</h3>
            <p>OpenClaw, custom agents, MCP servers, LangChain apps</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#128172;
            </div>
            <h3>Chatbots</h3>
            <p>ChatGPT plugins, custom bots, conversational AI</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#127760;
            </div>
            <h3>Web Apps</h3>
            <p>Next.js, Nuxt, React, Vue, Angular, Svelte</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#9881;
            </div>
            <h3>APIs & Backends</h3>
            <p>Express, FastAPI, Django, Spring Boot, Go services</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#128241;
            </div>
            <h3>Mobile Backends</h3>
            <p>uni-app, React Native, Flutter API services</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#128230;
            </div>
            <h3>Chrome Extensions</h3>
            <p>Extension backends, AxI tools, browser automation</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#128202;
            </div>
            <h3>Cron & Workers</h3>
            <p>Background jobs, scheduled tasks, data pipelines</p>
          </div>
          <div class="deploy-card">
            <div class="deploy-icon">
              &#128451;
            </div>
            <h3>Databases</h3>
            <p>PostgreSQL, MySQL, Redis, MongoDB, ClickHouse</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Build your global deploy system in <span class="gradient-text">3 steps</span>
          </h2>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">
              01
            </div>
            <h3>Download OORT.sh</h3>
            <p>Download the OORT.sh platform package. One lightweight installer that contains everything you need to build your own deployment infrastructure.</p>
          </div>
          <div class="step-card">
            <div class="step-number">
              02
            </div>
            <h3>Install on Your Global Servers</h3>
            <p>Deploy OORT.sh to your servers across the world &mdash; any cloud, any data center, any region. One command per server builds your private global deployment network.</p>
          </div>
          <div class="step-card">
            <div class="step-number">
              03
            </div>
            <h3>Ship Globally with One Command</h3>
            <p>Your Vibe Coding projects, AI agents, and apps deploy instantly to your entire global network. No third-party platform dependency &mdash; you own the whole pipeline.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Developer Tools Section -->
    <section class="devtools-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Built for <span class="gradient-text">Vibe Coding workflows</span>
          </h2>
          <p class="section-subtitle">
            Integrates with the AI coding tools you already use. Your creations ship to your global OORT.sh network instantly.
          </p>
        </div>
        <div class="devtools-grid">
          <div class="devtool-card">
            <h4>CLI First</h4>
            <p>Deploy from terminal with <code>oort deploy</code>. Works with Qoder CLI, Claude Code, and Codex CLI &mdash; Vibe Coding results go live instantly.</p>
          </div>
          <div class="devtool-card">
            <h4>GitHub Integration</h4>
            <p>Auto-deploy on push to your own global OORT.sh network. Preview deployments for every PR. Branch-based environments.</p>
          </div>
          <div class="devtool-card">
            <h4>One-Command Install</h4>
            <p>Run <code>curl -fsSL oort.sh/install | bash</code> on any server to add it to your global deployment network. Build your infra in minutes.</p>
          </div>
          <div class="devtool-card">
            <h4>Multi-Cloud Support</h4>
            <p>Install OORT.sh on AWS, GCP, Azure, or bare-metal servers. Mix and match &mdash; same experience everywhere, all under your control.</p>
          </div>
        </div>
      </div>
    </section>
    <OortShEnCta />
  </OortShEnLayout>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports'
import OortShEnLayout from '@/components/OortShEn/OortShEnLayout.vue'
import OortShEnCta from '@/components/OortShEn/OortShEnCta.vue'

definePageMeta({
  layout: 'oort-sh-en'
})

useHead({
  title: 'OORT.sh Deploy - Ship Anything Globally'
})
</script>
