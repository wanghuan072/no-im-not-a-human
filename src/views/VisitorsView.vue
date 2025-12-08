<template>
  <div class="visitors-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="section hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title" v-html="$t('VisitorsPage.hero.title', {}, { raw: true })"></h1>
          <p class="hero-subtitle" v-html="$t('VisitorsPage.hero.subtitle', {}, { raw: true })"></p>
          <div
            class="hero-description"
            v-html="$t('VisitorsPage.hero.description', {}, { raw: true })"
          ></div>
        </div>
      </div>
    </section>

    <!-- Main Characters Section -->
    <section id="main-characters" class="section main-characters">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('VisitorsPage.mainCharacters.title') }}</h2>

          <div class="character-grid">
            <div class="character-card main-character">
              <div class="character-image">
                <img src="/images/visitors/visitors-01.webp" alt="Hero" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.mainCharacters.hero.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.mainCharacters.hero.role') }}</p>
                <p
                  v-html="$t('VisitorsPage.mainCharacters.hero.description', {}, { raw: true })"
                ></p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-02.webp" alt="Cat" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.mainCharacters.cat.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.mainCharacters.cat.role') }}</p>
                <p
                  v-html="$t('VisitorsPage.mainCharacters.cat.description', {}, { raw: true })"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Neighbors Section -->
    <section id="neighbors" class="section neighbors">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('VisitorsPage.guestCharacters.title') }}</h2>
          <div class="character-grid">
            <div class="character-card human">
              <div class="character-image">
                <img src="/images/visitors/visitors-03.webp" alt="Neighbor" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.neighbor.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.neighbor.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.neighbor.description1') }}</p>
                <p
                  v-html="
                    $t('VisitorsPage.guestCharacters.neighbor.description2', {}, { raw: true })
                  "
                ></p>
              </div>
            </div>
            <div class="character-card human">
              <div class="character-image">
                <img src="/images/visitors/visitors-04.webp" alt="Girl Next Door" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.girlNextDoor.name') }}</h3>
                <p class="character-role">
                  {{ $t('VisitorsPage.guestCharacters.girlNextDoor.role') }}
                </p>
                <p>{{ $t('VisitorsPage.guestCharacters.girlNextDoor.description1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.girlNextDoor.description2') }}</p>
              </div>
            </div>
            <div class="character-card human">
              <div class="character-image">
                <img src="/images/visitors/visitors-05.webp" alt="Beanpole" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.beanpole.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.beanpole.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.beanpole.description1') }}</p>
                <p
                  v-html="
                    $t('VisitorsPage.guestCharacters.beanpole.description2', {}, { raw: true })
                  "
                ></p>
              </div>
            </div>
            <div class="character-card visitor">
              <div class="character-image">
                <img src="/images/visitors/visitors-06.webp" alt="Cashier" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.cashier.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.cashier.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.cashier.description1') }}</p>
                <p
                  v-html="
                    $t('VisitorsPage.guestCharacters.cashier.description2', {}, { raw: true })
                  "
                ></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-07.webp" alt="Coatman" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char5.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char5.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char5.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char5.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-08.webp" alt="Widow" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char6.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char6.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char6.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char6.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-09.webp" alt="Sunlight" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char7.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char7.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char7.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char7.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-10.webp" alt="Debt" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char8.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char8.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char8.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char8.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-11.webp" alt="Surgeon" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char9.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char9.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char9.desc1') }}</p>
                <p v-html="$t('VisitorsPage.guestCharacters.char9.desc2', {}, { raw: true })"></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-12.webp" alt="Madame" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char10.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char10.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char10.desc1') }}</p>
                <p v-html="$t('VisitorsPage.guestCharacters.char10.desc2', {}, { raw: true })"></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-13.webp" alt="Grandma" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char11.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char11.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char11.desc1') }}</p>
                <p v-html="$t('VisitorsPage.guestCharacters.char11.desc2', {}, { raw: true })"></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-14.webp" alt="Hermit" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char12.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char12.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char12.desc1') }}</p>
                <p v-html="$t('VisitorsPage.guestCharacters.char12.desc2', {}, { raw: true })"></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-15.webp" alt="Suit Man" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char13.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char13.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char13.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char13.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-16.webp" alt="Seduction" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char14.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char14.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char14.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char14.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-17.webp" alt="Sisters" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char15.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char15.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char15.desc1') }}</p>
                <p v-html="$t('VisitorsPage.guestCharacters.char15.desc2', {}, { raw: true })"></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-18.webp" alt="Swearing" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char16.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char16.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char16.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char16.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-19.webp" alt="Son" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char17.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char17.role') }}</p>
                <p v-html="$t('VisitorsPage.guestCharacters.char17.desc1', {}, { raw: true })"></p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-20.webp" alt="Cat Woman" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char18.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char18.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char18.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char18.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-21.webp" alt="Runaway Youth" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char19.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char19.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char19.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char19.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-22.webp" alt="Blind" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char20.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char20.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char20.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char20.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-23.webp" alt="Bald Head" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char21.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char21.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char21.desc1') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-24.webp" alt="Married Couple" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char22.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char22.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char22.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char22.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-25.webp" alt="Death Believers" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char23.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char23.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char23.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char23.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-26.webp" alt="Fiend" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char24.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char24.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char24.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char24.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-27.webp" alt="Conductor" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char25.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char25.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char25.desc1') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-28.webp" alt="Minister" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char26.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char26.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char26.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char26.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-29.webp" alt="Firefighter" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char27.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char27.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char27.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char27.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-30.webp" alt="Gentile" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char28.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char28.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char28.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char28.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-31.webp" alt="Unemployed" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char29.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char29.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char29.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char29.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-32.webp" alt="Fortune Teller" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char30.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char30.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char30.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char30.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-33.webp" alt="Wounded" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char31.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char31.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char31.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char31.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-34.webp" alt="Gravekeeper" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char32.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char32.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char32.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char32.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-35.webp" alt="Insomnia" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char33.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char33.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char33.desc1') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-36.webp" alt="Homeless" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char34.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char34.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char34.desc1') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-37.webp" alt="Hat" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char35.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char35.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char35.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char35.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-38.webp" alt="Nun" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char36.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char36.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char36.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char36.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-39.webp" alt="Factor" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char37.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char37.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char37.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char37.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-40.webp" alt="Horde" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char38.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char38.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char38.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char38.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-41.webp" alt="Taxi Driver" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char39.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char39.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char39.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char39.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-42.webp" alt="Teacher" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char40.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char40.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char40.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char40.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-43.webp" alt="Conspiracy Theorist" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char41.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char41.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char41.desc1') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-44.webp" alt="Disabled" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char42.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char42.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char42.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char42.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-45.webp" alt="Public Official" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char43.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char43.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char43.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char43.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-46.webp" alt="Immortal" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char44.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char44.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char44.desc1') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char44.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-47.webp" alt="Optimist" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.guestCharacters.char45.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.guestCharacters.char45.role') }}</p>
                <p>{{ $t('VisitorsPage.guestCharacters.char45.desc1') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Characters Section -->
    <section id="special-characters" class="section special-characters">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('VisitorsPage.specialCharacters.title') }}</h2>

          <div class="character-grid">
            <div class="character-card visitor">
              <div class="character-image">
                <img src="/images/visitors/visitors-48.webp" alt="Intruder" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char1.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char1.role') }}</p>
                <p v-html="$t('VisitorsPage.specialCharacters.char1.desc1', {}, { raw: true })"></p>
                <p v-html="$t('VisitorsPage.specialCharacters.char1.desc2', {}, { raw: true })"></p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-49.webp" alt="Prophet" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char2.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char2.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char2.desc1') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char2.desc2') }}</p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-50.webp" alt="Serial Office Agent" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char3.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char3.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char3.desc1') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char3.desc2') }}</p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-51.webp" alt="Vigilante" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char4.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char4.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char4.desc1') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char4.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-52.webp" alt="Courier" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char5.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char5.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char5.desc1') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char5.desc2') }}</p>
              </div>
            </div>
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-53.webp" alt="Apostle" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char6.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char6.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char6.desc1') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char6.desc2') }}</p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-54.webp" alt="Roobi Boy" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char7.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char7.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char7.desc1') }}</p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-55.webp" alt="Mushroom" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.specialCharacters.char8.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.specialCharacters.char8.role') }}</p>
                <p>{{ $t('VisitorsPage.specialCharacters.char8.desc1') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TV Characters Section -->
    <section id="tv-characters" class="section tv-characters">
      <div class="container">
        <div class="content-wrapper">
          <h2 class="section-title">{{ $t('VisitorsPage.tvCharacters.title') }}</h2>

          <div class="character-grid">
            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-56.webp" alt="Male Anchor" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.tvCharacters.char1.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.tvCharacters.char1.role') }}</p>
                <p>{{ $t('VisitorsPage.tvCharacters.char1.desc1') }}</p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-57.webp" alt="Weather Caster" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.tvCharacters.char2.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.tvCharacters.char2.role') }}</p>
                <p>{{ $t('VisitorsPage.tvCharacters.char2.desc1') }}</p>
              </div>
            </div>

            <div class="character-card">
              <div class="character-image">
                <img src="/images/visitors/visitors-57.webp" alt="Female Anchor" />
              </div>
              <div class="character-info">
                <h3>{{ $t('VisitorsPage.tvCharacters.char3.name') }}</h3>
                <p class="character-role">{{ $t('VisitorsPage.tvCharacters.char3.role') }}</p>
                <p>{{ $t('VisitorsPage.tvCharacters.char3.desc1') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import '@/assets/css/public.css'
import { setSEO, getSEOFromLocale } from '@/seo'

const { locale } = useI18n()

// 设置SEO
const setupSEO = async () => {
  const seoData = await getSEOFromLocale('visitors', locale.value)
  setSEO(seoData)
}

onMounted(() => {
  setupSEO()
})

watch(locale, () => {
  setupSEO()
})
</script>

<style scoped>
/* Hero Section */
.section.hero {
  padding: 100px 0 40px 0;
  background: #000;
  position: relative;
  overflow: hidden;
}

.section.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/about-img.webp');
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.8;
}

.section.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
}

.section.hero .container {
  position: relative;
  z-index: 3;
}

.hero-title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 24px;
  color: white;
  text-align: center;
}

.hero-title .highlight {
  font-family: 'Creepster', cursive;
  color: #00ff88;
  text-shadow: 0 0 10px #00ff88;
  font-weight: normal;
}

.highlight-text {
  color: #00ff88;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

.hero-subtitle {
  font-size: 20px;
  color: #ccc;
  text-align: center;
  margin-bottom: 40px;
  font-style: italic;
}

.hero-description p {
  font-size: 16px;
  color: #fff;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

.hero-description strong {
  color: #00ff88;
  font-weight: bold;
}

/* Section Styling */
.section {
  padding: 80px 0;
  position: relative;
}

.section.main-characters {
  background: linear-gradient(135deg, #0d1b0d 0%, #0a0a0a 50%, #0d1b0d 100%);
}

.section.neighbors {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
}

.section.fixed-guests {
  background: linear-gradient(135deg, #1a0d0d 0%, #0a0a0a 50%, #1a0d0d 100%);
}

.section.random-guests {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
}

.section.special-characters {
  background: linear-gradient(135deg, #1a0d0d 0%, #0a0a0a 50%, #1a0d0d 100%);
}

.section.more-guests {
  background: linear-gradient(135deg, #0d0d1a 0%, #111111 50%, #0d0d1a 100%);
}

.section.tv-characters {
  background: linear-gradient(135deg, #0d1b0d 0%, #0a0a0a 50%, #0d1b0d 100%);
}

.section-title {
  font-family: 'Creepster', cursive;
  font-size: 48px;
  text-align: center;
  color: #00ff88;
  margin-bottom: 60px;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

/* Character List Layout */
.character-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
}

.character-card {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(0, 255, 136, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  padding: 30px;
  transition: all 0.3s ease;
}

.character-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.4);
}

.character-card.main-character {
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 136, 0.3);
}

.character-card.human {
  border-color: rgba(0, 150, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(0, 150, 255, 0.1);
}

.character-card.human:hover {
  border-color: rgba(0, 150, 255, 0.5);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 150, 255, 0.3);
}

.character-card.visitor {
  border-color: rgba(255, 0, 0, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 0, 0, 0.1);
}

.character-card.visitor:hover {
  border-color: rgba(255, 0, 0, 0.5);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.3);
}

.character-image {
  flex: 0 0 200px;
  aspect-ratio: 2/3;
  border-radius: 10px;
  overflow: hidden;
}

.character-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.character-card:hover .character-image img {
  transform: scale(1.05);
}

.character-info {
  flex: 1;
  padding: 0;
}

.character-info h3 {
  color: #00ff88;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
}

.character-role {
  color: #888;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.character-info p {
  color: #e0e0e0;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 15px;
  text-align: justify;
}

.character-info strong {
  color: #00ff88;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0, 255, 136, 0.3);
}

/* Link Styles */
a {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

a:hover {
  color: #00cc66;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Special styling for links in different contexts */
.hero-description a,
.character-info a {
  color: #00ff88;
  text-decoration: underline;
  text-decoration-color: #00ff88;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.hero-description a:hover,
.character-info a:hover {
  color: #00cc66;
  text-decoration-color: #00cc66;
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .character-card {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  .section.hero {
    padding: 70px 0 20px 0;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-description p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  .hero-subtitle {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .character-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 10px;
  }

  .character-card {
    padding: 10px;
    gap: 10px;
  }

  .character-image {
    flex: none;
    width: 100%;
    aspect-ratio: 2/3;
  }

  .character-info h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .character-role {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .character-info p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 8px;
  }
}
</style>