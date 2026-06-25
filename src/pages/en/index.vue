<template>
  <OortShEnLayout :show-footer="false">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="gradient-orb orb-1" />
        <div class="gradient-orb orb-2" />
        <div class="gradient-orb orb-3" />
        <div class="grid-overlay" />
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot" />
          Your Vibe Coding Bestie &mdash; Build Your Own Global Deploy System
        </div>
        <h1 class="hero-title">
          Download. Install globally.<br />
          <span class="gradient-text">Own your deployment infrastructure.</span>
        </h1>
        <p class="hero-subtitle">
          Download OORT.sh and deploy it to your servers around the world. Instantly build a private global deployment system you fully own. Then ship your Vibe Coding creations &mdash; AI agents, web apps, APIs &mdash; to production worldwide with a single command, through infrastructure you control.
        </p>
        <div class="hero-actions">
          <a href="#" class="btn-primary btn-large">
            Download OORT.sh
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
          <a href="/en/deploy#how-it-works" class="btn-secondary btn-large">See How It Works</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">30+</span>
            <span class="stat-label">Global Regions</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-number">50K+</span>
            <span class="stat-label">Deployments</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-number">99.9%</span>
            <span class="stat-label">Uptime SLA</span>
          </div>
        </div>
      </div>
      <!-- Terminal Preview -->
      <div class="hero-terminal">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot red" />
              <span class="dot yellow" />
              <span class="dot green" />
            </div>
            <span class="terminal-title">terminal</span>
          </div>
          <div class="terminal-body">
            <div class="terminal-line">
              <span class="prompt">$</span>
              <span class="command">curl -fsSL oort.sh/install | bash</span>
            </div>
            <div class="terminal-line output">
              <span class="text-muted">Installing OORT.sh platform...</span>
            </div>
            <div class="terminal-line output">
              <span class="text-success">&#10003;</span> OORT.sh installed on us-east server
            </div>
            <div class="terminal-line output">
              <span class="text-success">&#10003;</span> OORT.sh installed on eu-west server
            </div>
            <div class="terminal-line output">
              <span class="text-success">&#10003;</span> OORT.sh installed on ap-southeast server
            </div>
            <div class="terminal-line output">
              <span class="text-success">&#10003;</span> Private global deployment network ready
            </div>
            <div class="terminal-line output">
              <span class="text-muted">---</span>
            </div>
            <div class="terminal-line" style="margin-top: 12px;">
              <span class="prompt">$</span>
              <span class="command">oort deploy --global</span>
            </div>
            <div class="terminal-line output">
              <span class="text-success">&#10003;</span> Vibe Coding project detected (Next.js)
            </div>
            <div class="terminal-line output">
              <span class="text-purple">&#9654;</span> Deployed to 3 regions &mdash; <span class="text-link">https://myapp.oort.sh</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By / Logo Cloud -->
    <section class="logos-section">
      <div class="container">
        <p class="logos-label">
          Deploy any framework globally through your own OORT.sh infrastructure
        </p>
        <div class="logos-grid">
          <div class="logo-item">
            Next.js
          </div>
          <div class="logo-item">
            Nuxt
          </div>
          <div class="logo-item">
            React
          </div>
          <div class="logo-item">
            Vue
          </div>
          <div class="logo-item">
            Python
          </div>
          <div class="logo-item">
            Go
          </div>
          <div class="logo-item">
            Rust
          </div>
          <div class="logo-item">
            Node.js
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
  title: 'OORT.sh - Build Your Private Global Deployment Infrastructure'
})
</script>
