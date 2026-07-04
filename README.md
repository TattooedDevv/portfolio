# TattooedDevv Portfolio

Professional portfolio website for Jasmine Meade under the TattooedDevv brand.

Built with React, Vite, TypeScript, and Tailwind CSS. The first version is intentionally simple, polished, and easy to edit.

Primary domain:

```text
tattooeddevv.io
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content To Replace

Search the codebase for `TODO` comments. The main placeholders are:

- LinkedIn URL
- GitHub URL
- Email address
- Resume PDF path
- Project screenshots
- Project GitHub repositories
- Container image registry path
- Ingress controller and TLS settings

Put the resume at:

```text
public/resume.pdf
```

Or update the resume links in `src/App.tsx`.

## Docker

Build the Docker image:

```bash
docker build -t tattooeddevv-portfolio:latest .
```

Run it locally:

```bash
docker run --rm -p 8080:80 tattooeddevv-portfolio:latest
```

Open:

```text
http://localhost:8080
```

## Kubernetes

Update the image in:

```text
k8s/deployment.yaml
```

Apply the manifests:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

Check rollout status:

```bash
kubectl rollout status deployment/tattooeddevv-portfolio
```

## GitHub Actions

The workflow in `.github/workflows/docker-image.yml` builds and pushes the Docker image to GitHub Container Registry.

Before using it:

- Push this project to GitHub.
- Make sure GitHub Packages is enabled for the repo or account.
- Update Kubernetes manifests to use the final image name.
- Add deployment automation later with kubectl, Helm, Argo CD, or Flux.

## Cloudflare DNS Later

When the Kubernetes ingress has an external IP or hostname:

1. Add `tattooeddevv.io` to Cloudflare.
2. Create an `A` record pointing to the ingress IP, or a `CNAME` pointing to the ingress hostname.
3. Add `www` as a `CNAME` to `tattooeddevv.io`.
4. Use Cloudflare SSL mode that matches your cluster TLS setup.
5. If using cert-manager, keep DNS proxied off until certificates issue successfully, then enable proxying if desired.

The `public/CNAME` file is included for static hosts that use it, such as GitHub Pages. It is harmless for the Docker and Kubernetes deployment path.

## Suggested Next Iterations

- Add real project screenshots.
- Replace placeholder contact links.
- Add a real resume PDF.
- Split journal posts into Markdown or MDX when writing begins.
- Add live Sage integration once the assistant API is ready.
