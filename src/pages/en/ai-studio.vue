<template>
  <OortShEnLayout>
    <!-- OortCloud AI Studio Section -->
    <section id="ai-studio" class="ai-studio-section">
      <div class="container">
        <div class="section-header">
          <div class="hero-badge" style="margin: 0 auto 20px;">
            <span class="badge-dot" />
            Integrated Development Environment
          </div>
          <h2 class="section-title">
            <span class="gradient-text">OortCloud AI Studio</span>
          </h2>
          <p class="section-subtitle">
            A full-featured cloud IDE with AI-native development capabilities. Code, test, deploy, and operate &mdash; all in one place, from anywhere in the world.
          </p>
        </div>
        <div class="studio-showcase">
          <div class="studio-window">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot red" />
                <span class="dot yellow" />
                <span class="dot green" />
              </div>
              <span class="terminal-title">OortCloud AI Studio</span>
            </div>
            <div class="studio-body">
              <div class="studio-sidebar">
                <div class="studio-sidebar-item active">
                  Explorer
                </div>
                <div class="studio-sidebar-item">
                  AI Chat
                </div>
                <div class="studio-sidebar-item">
                  Terminal
                </div>
                <div class="studio-sidebar-item">
                  Deploy
                </div>
                <div class="studio-sidebar-item">
                  Logs
                </div>
              </div>
              <div class="studio-editor">
                <div class="studio-tab">
                  app/api/agent/route.ts
                </div>
                <div class="studio-code">
                  <span class="code-keyword">export async function</span> <span class="code-func">POST</span>(req: Request) {<br />
                  &nbsp;&nbsp;<span class="code-keyword">const</span> { prompt } = <span class="code-keyword">await</span> req.json()<br />
                  &nbsp;&nbsp;<span class="code-keyword">const</span> response = <span class="code-keyword">await</span> <span class="code-func">agent</span>.run(prompt)<br />
                  &nbsp;&nbsp;<span class="code-keyword">return</span> Response.json(response)<br />
                  }
                </div>
                <div class="studio-ai-hint">
                  <span class="text-purple">AI</span> &nbsp;Suggesting: Add rate limiting middleware for production...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="studio-features-grid">
          <div class="studio-feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <h4>AI-Powered Coding</h4>
            <p>Integrated AI assistant for code generation, refactoring, and debugging. Supports Qoder CLI, Claude Code CLI, Codex CLI, and OpenClaw agents natively.</p>
          </div>
          <div class="studio-feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
            </div>
            <h4>One-Click Deploy from IDE</h4>
            <p>Develop and deploy in one seamless flow. Push to Dev, Test, Production, or Backup environments without leaving the editor.</p>
          </div>
          <div class="studio-feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            </div>
            <h4>Templates & Scaffolding</h4>
            <p>Start from 200+ production-ready templates. Full-stack apps, AI agents, microservices, and industry-specific solutions ready to customize.</p>
          </div>
          <div class="studio-feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h4>Team Collaboration</h4>
            <p>Real-time co-editing, shared environments, code review workflows, and role-based access. Built for distributed teams worldwide.</p>
          </div>
          <div class="studio-feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
            </div>
            <h4>VS Code Compatible</h4>
            <p>Full VS Code extension ecosystem support. Use your existing extensions, keybindings, and themes. Also available as a standalone desktop app.</p>
          </div>
          <div class="studio-feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </div>
            <h4>Cloud + Edge Development</h4>
            <p>Develop cloud-native and edge applications side by side. Test locally, deploy globally. Supports Docker, K8s, and serverless targets.</p>
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
  title: 'OortCloud AI Studio - AI Native Cloud IDE'
})
</script>
