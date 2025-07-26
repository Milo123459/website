# Stage 0: Init submodules
FROM alpine/git as submodules
WORKDIR /

# Copy the already cloned repo
COPY . .

RUN ls -al

# Initialize and update submodules
RUN set -eux; \
  grep path .gitmodules | awk '{ print $3 }' > paths.txt; \
  grep url .gitmodules | awk '{ print $3 }' > urls.txt; \
  paste urls.txt paths.txt | while read url path; do \
    git clone --depth=1 "$url" "$path"; \
  done

# Stage 1: Build with Zola
FROM ghcr.io/getzola/zola:v0.21.0 as zola
WORKDIR /project

# Copy the repo with submodules from previous stage
COPY --from=submodules / /project

# Build the site
# ENV RAILWAY_PUBLIC_DOMAIN=${RAILWAY_PUBLIC_DOMAIN}
RUN ["zola", "build", "-u", "https://website-production-52a1.up.railway.app"]

# Stage 2: Serve with static-web-server
FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=zola /project/public /public
