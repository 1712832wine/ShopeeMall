<template>
  <div class="campaign-category">
    <CampaignItem v-for="item in listItem" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CampaignItem from "./CampaignItem";
import campaign from "../../Data/campaignData.json";
export default {
  data: function() {
    return {
      listItem: campaign.items
    };
  },
  components: {
    CampaignItem: CampaignItem
  }
};
</script>

<style lang="scss">
@import "./Style-Campaign.scss";
</style>
