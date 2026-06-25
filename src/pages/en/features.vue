<template>
  <OortShEnLayout>
    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Everything you need to <span class="gradient-text">build your global deploy system</span>
          </h2>
          <p class="section-subtitle">
            Download OORT.sh, install it on your servers, and get a production-grade deployment platform. No Dockerfiles required, no YAML nightmares, no third-party dependencies.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <h3>Instant Deployments</h3>
            <p>Push to GitHub or run <code>oort deploy</code> from CLI. Auto-detect frameworks, build, and ship to production in seconds.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
            </div>
            <h3>Any Language, Any Framework</h3>
            <p>Node.js, Python, Go, Rust, Java, Ruby, Elixir, and more. If it runs in a container, it runs on OORT.sh.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
            </div>
            <h3>Auto-Scaling</h3>
            <p>Scale to zero when idle, scale up instantly under load. Pay only for what you use with per-second billing.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>Enterprise Security</h3>
            <p>SOC 2 compliant, private networking, secrets management, role-based access control, and audit logging built in.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.36-7.36l-1.41 1.41M6.05 17.95l-1.41 1.41m12.72 0l-1.41-1.41M6.05 6.05L4.64 4.64" /></svg>
            </div>
            <h3>AI Agent Hosting</h3>
            <p>Purpose-built for the AI era. Deploy AI agents, chatbots, MCP servers, and LLM-powered apps with production-grade reliability.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <h3>Managed Databases</h3>
            <p>One-click PostgreSQL, MySQL, Redis, and MongoDB. Automatic backups, point-in-time recovery, and private networking.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" /></svg>
            </div>
            <h3>Global Multi-Region</h3>
            <p>Deploy to 30+ regions worldwide &mdash; US, Europe, Asia-Pacific, Middle East. Ultra-low latency with automatic SSL and custom domains everywhere.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
            </div>
            <h3>Download &amp; Build Your Own Infra</h3>
            <p>Download OORT.sh and install it on your servers across the world with a single command. Build a private global deployment system you fully control &mdash; no SaaS dependency, no vendor lock-in.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            </div>
            <h3>App Marketplace &amp; Unified Portal</h3>
            <p>An enterprise-grade capability Railway and Vercel don&apos;t offer. Publish, audit, distribute, upgrade, and retire apps across iOS, Android, HarmonyOS, OortCloud Desktop, and AxI desktop &mdash; all from one portal with fine-grained visibility &amp; access control by team, role, or org unit.</p>
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
  title: 'OORT.sh Features - Build Your Global Deploy System'
})
</script>
