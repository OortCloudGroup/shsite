<template>
  <OortShEnLayout>
    <!-- Pricing Section -->
    <section id="pricing" class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Simple, transparent <span class="gradient-text">pricing</span>
          </h2>
          <p class="section-subtitle">
            Download free. Build your global deployment infrastructure. Pay as you scale.
          </p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-tier">
              Free Trial
            </div>
            <div class="pricing-price">
              <span class="price-amount">$0</span>
            </div>
            <p class="pricing-desc">
              Perfect for trying things out
            </p>
            <ul class="pricing-features">
              <li>$5 free credit included</li>
              <li>No credit card required</li>
              <li>All core features</li>
              <li>Community support</li>
            </ul>
            <a href="#" class="btn-secondary btn-block">Get Started Free</a>
          </div>
          <div class="pricing-card popular">
            <div class="popular-badge">
              Most Popular
            </div>
            <div class="pricing-tier">
              Pro
            </div>
            <div class="pricing-price">
              <span class="price-amount">$20</span>
              <span class="price-period">/seat/month</span>
            </div>
            <p class="pricing-desc">
              For teams shipping to production
            </p>
            <ul class="pricing-features">
              <li>Unlimited deployments</li>
              <li>Team collaboration</li>
              <li>Custom domains & SSL</li>
              <li>Priority support</li>
              <li>Advanced metrics & logs</li>
              <li>Auto-scaling</li>
            </ul>
            <a href="#" class="btn-primary btn-block">Start Pro Trial</a>
          </div>
          <div class="pricing-card">
            <div class="pricing-tier">
              Enterprise
            </div>
            <div class="pricing-price">
              <span class="price-amount">Custom</span>
            </div>
            <p class="pricing-desc">
              For organizations needing compliance & control
            </p>
            <ul class="pricing-features">
              <li>Private / on-premises deployment</li>
              <li>Compliance certifications</li>
              <li>Dedicated support & SLA</li>
              <li>SSO & RBAC</li>
              <li>App marketplace</li>
              <li>Service bus & governance</li>
            </ul>
            <a href="#" class="btn-secondary btn-block">Contact Sales</a>
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
  title: 'OORT.sh Pricing - Simple Transparent Pricing'
})
</script>
